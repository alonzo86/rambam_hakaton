package com.hakaton.rambam.departments;

import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import com.hakaton.rambam.departments.department.DepartmentService;

import javax.annotation.PostConstruct;

import com.hakaton.rambam.departments.models.Department;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.File;

@Component
public class DataInitializer {

    private static final Logger log = LoggerFactory.getLogger(DataInitializer.class);

    private final DepartmentService departmentService;

    @Autowired
    public DataInitializer(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @PostConstruct
    private void setupData() {
        try {
            CsvSchema bootstrapSchema = CsvSchema.emptySchema().withHeader();
            CsvMapper mapper = new CsvMapper();
            File file = new ClassPathResource("departments.csv").getFile();
            mapper.reader().with(bootstrapSchema).readValues(file)
                    .readAll()
                    .stream()
                    .map(item -> (Department)item)
                    .forEach (this.departmentService::create);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }
}