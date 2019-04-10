package com.hakaton.rambam.common.services;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.netflix.zuul.context.RequestContext;

@Component
public class ApiSigningService {

	private static final String API_SIGNING_HEADER = "ApiSigning";
	private static final String API_SIGNING_TIMESTAMP_HEADER = "ApiSigningTimeStamp";
	private static final String SIGNING_INPUT_DATA = "%s-%s";
	
	@Autowired
	private GenericEncryptionService genericEncryptionService;
	
	public void addApiSigning(RequestContext requestContext) throws Exception {
		String method = requestContext.getRequest().getMethod();
		String path = requestContext.getRequest().getPathInfo();
		long timeStamp = new Date().getTime();
		String signingData = String.format(SIGNING_INPUT_DATA, path, method);
		String signature = genericEncryptionService.encrypt(signingData, timeStamp);
		requestContext.addZuulRequestHeader(API_SIGNING_TIMESTAMP_HEADER, timeStamp + "");
		requestContext.addZuulRequestHeader(API_SIGNING_HEADER, signature);
	}
	
	public boolean verifyApiSignature(RequestContext requestContext) {
		String method = requestContext.getRequest().getMethod();
		String path = requestContext.getRequest().getPathInfo();
		String timeStampHeader = requestContext.getZuulRequestHeaders().getOrDefault(API_SIGNING_TIMESTAMP_HEADER, "0");
		long timeStamp = Long.parseLong(timeStampHeader);
		String signingData = String.format(SIGNING_INPUT_DATA, path, method);
		String actualSignature;
		try {
			actualSignature = genericEncryptionService.encrypt(signingData, timeStamp);
		} catch (Exception e) {
			return false;
		}
		String expectedSignature = requestContext.getZuulRequestHeaders().getOrDefault(API_SIGNING_HEADER, "");
		return actualSignature.equals(expectedSignature);
	}
}
