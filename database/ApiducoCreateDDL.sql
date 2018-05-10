use apiducodb;

create table STUDENTS( 
    idStudent int not null auto_increment primary key,
    document varchar(12) not null,
    firstName varchar(20) not null,
    lastName varchar(20) not null,
    program varchar(30) not null,
    code varchar(10) not null,
    age int not null
);

create table MANAGERS(
    idManager int not null auto_increment primary key,
    firstName varchar(20),
    lastName varchar(20),
    identification varchar(20)
);

create table LABORATORIES(
    idLaboratory int not null auto_increment primary key,
    nameLaboratory varchar(20) not null,
    location varchar(8) not null
);

create table TEACHERS(
    idTeacher int not null auto_increment primary key,
    name varchar (20),
    lastName varchar (20),
    identification varchar (20),
    program varchar(20)
);
 
create table LESSONS(
    idLesson int not null auto_increment primary key,
    idTeacher int not null,
    idLaboratory int not null,
    nameLesson varchar (30) not null,
    groupLesson int not null
);

ALTER TABLE LESSONS ADD CONSTRAINT LESSON_TEACHER_FK FOREIGN KEY (idTeacher) REFERENCES TEACHERS(idTeacher); 
 
ALTER TABLE LESSONS ADD CONSTRAINT LESSON_LABORATORY_FK FOREIGN KEY (idLaboratory) REFERENCES LABORATORIES(idLaboratory);

create table SCHEDULES(
    idSchedule int not null auto_increment primary key,
    idLesson int not null,
    dayOfWeek varchar(1) not null,
    timeInit time not null,
    timeEnd time not null
);
 
ALTER TABLE SCHEDULES ADD CONSTRAINT SCHEDULE_LESSON_FK FOREIGN KEY (idLesson) REFERENCES LESSONS(idLesson);

create table MATERIALS(
    idMaterial int not null auto_increment primary key,
    idLaboratory int not null, 
    nameMaterial varchar(40) not null,
    numberMaterial int not null,
    model varchar(20) not null,
    mark varchar (20) not null,
    state varchar(15) not null 
);
 
ALTER TABLE MATERIALS ADD CONSTRAINT MATERIAL_LABORATORY_FK FOREIGN KEY (idLaboratory) REFERENCES LABORATORIES(idLaboratory);

create table SOLICITUDE(
    idSolicitude int not null auto_increment primary key,
    idLaboratory int not null,
    idStudent int not null,
    idLesson int null,
    idManager int null,
    practics varchar(30) not null,
    solicitedAt date not null,
    dateSolicitude date not null,
    timeInit time null,
    timeEnd time null,
    estado varchar (10) not null
);

ALTER TABLE SOLICITUDE ADD CONSTRAINT SOLICITUDE_LABORATORY_FK FOREIGN KEY (idLaboratory) REFERENCES LABORATORIES(idLaboratory);

ALTER TABLE SOLICITUDE ADD CONSTRAINT SOLICITUDE_STUDENT_FK FOREIGN KEY (idStudent) REFERENCES STUDENTS(idStudent);

ALTER TABLE SOLICITUDE ADD CONSTRAINT SOLICITUDE_LESSON_FK FOREIGN KEY (idLesson) REFERENCES LESSONS(idLesson);
 
ALTER TABLE SOLICITUDE ADD CONSTRAINT SOLICITUDE_MANAGER_FK FOREIGN KEY (idManager) REFERENCES MANAGERS(idManager);
 
create table MATERIAL_SOLICITUDE(
    idMaterialSolicitude int not null auto_increment primary key,
    idMaterial int not null,
    idSolicitude int not null
);

ALTER TABLE MATERIAL_SOLICITUDE ADD CONSTRAINT SOLICITUDE_MATERIAL_FK FOREIGN KEY (idSolicitude) REFERENCES SOLICITUDE(idSolicitude);

ALTER TABLE MATERIAL_SOLICITUDE ADD CONSTRAINT MATERIAL_SOLICITUDE_FK FOREIGN KEY (idMaterial) REFERENCES MATERIALS(idMaterial);