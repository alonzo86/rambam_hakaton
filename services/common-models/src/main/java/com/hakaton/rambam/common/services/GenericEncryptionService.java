package com.hakaton.rambam.common.services;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

import org.apache.commons.codec.binary.Hex;
import org.apache.commons.lang.ArrayUtils;
import org.springframework.stereotype.Component;
import org.springframework.util.SerializationUtils;

@Component
public class GenericEncryptionService {

	private static final String HASH_ALGORITHM_NAME = "SHA-256";
	
	public String encrypt(String data, long timeStamp) throws Exception {
    	byte[] salt = SerializationUtils.serialize(timeStamp);
		MessageDigest digest = MessageDigest.getInstance(HASH_ALGORITHM_NAME);
		byte[] mergedBytes = ArrayUtils.addAll(data.getBytes(StandardCharsets.UTF_8), salt);
		byte[] hash = digest.digest(mergedBytes);
		return Hex.encodeHexString(hash).toLowerCase();
    }
	
	public boolean verifyEncryptedKey(String data, long timeStamp, String expectedKey) throws Exception {
		String actualKey = encrypt(data, timeStamp);
		return actualKey.equals(expectedKey);
	}
}
