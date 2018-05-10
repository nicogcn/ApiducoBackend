INSERT INTO STUDENTS (document,firstName,lastName,program,code,age)VALUES ('1018476404','Nicolás','Aldana','Ingeniería de Sistemas','1211255',22);
INSERT INTO STUDENTS (document,firstName,lastName,program,code,age)VALUES ('docXimenaC','Ximena','Cifuentes','Ingeniería de Sistemas','1111111',25);
INSERT INTO STUDENTS (document,firstName,lastName,program,code,age)VALUES ('docCrisSimbaqueva','Cristian','Simbaqueva','Ingeniería de Sistemas','1111111',25);

INSERT INTO MANAGERS (firstName,lastName,identification)VALUES ('Encargado','LaboratoryUno','Doc1');
INSERT INTO MANAGERS (firstName,lastName,identification)VALUES ('Encargado','LaboratoryDos','Doc2');

INSERT INTO LABORATORIES (nameLaboratory,location)VALUES ('LaboratoryTestUno','F201');
INSERT INTO LABORATORIES (nameLaboratory,location)VALUES ('LaboratoryTestDos','F202');

INSERT INTO MATERIALS (idLaboratory, nameMaterial, numberMaterial, model, mark, state) VALUES (1,'ApiducoMaterial1', 1,'ef86','APIDUCO','DISPONIBLE');
INSERT INTO MATERIALS (idLaboratory, nameMaterial, numberMaterial, model, mark, state) VALUES (1,'ApiducoMaterial2', 2,'ef87','APIDUCO','DISPONIBLE');
INSERT INTO MATERIALS (idLaboratory, nameMaterial, numberMaterial, model, mark, state) VALUES (1,'ApiducoMaterial3', 3,'ef88','APIDUCO','DISPONIBLE');
INSERT INTO MATERIALS (idLaboratory, nameMaterial, numberMaterial, model, mark, state) VALUES (2,'ApiducoMaterial12', 1,'ef50','APIDUCO','DISPONIBLE');
INSERT INTO MATERIALS (idLaboratory, nameMaterial, numberMaterial, model, mark, state) VALUES (2,'ApiducoMaterial14', 2,'ef55','APIDUCO','DISPONIBLE');

INSERT INTO TEACHERS (name,lastName,identification,program) VALUES ('ProfesorUno','TeacherOne','DocProfesor','Ingeniería de Sistemas');
INSERT INTO TEACHERS (name,lastName,identification,program) VALUES ('ProfesorDos','TeacherTwo','DocProfesor2','Ingeniería de Sistemas');

INSERT INTO LESSONS (idTeacher, idLaboratory, nameLesson, groupLesson) VALUES (1,1,'Iot', 1);
INSERT INTO LESSONS (idTeacher, idLaboratory, nameLesson, groupLesson) VALUES (2,2,'Introducción a la ingeniería', 1);

INSERT INTO SCHEDULES (idLesson,dayOfWeek,timeInit,timeEnd) VALUES (1,'4','20:00:00','22:00:00'); 
INSERT INTO SCHEDULES (idLesson,dayOfWeek,timeInit,timeEnd) VALUES (1,'6','12:00:00','14:00:00'); 
INSERT INTO SCHEDULES (idLesson,dayOfWeek,timeInit,timeEnd) VALUES (2,'1','16:00:00','18:00:00'); 
INSERT INTO SCHEDULES (idLesson,dayOfWeek,timeInit,timeEnd) VALUES (2,'3','14:00:00','16:00:00'); 

INSERT INTO SOLICITUDE (idLaboratory,idStudent,idLesson,idManager,practics,solicitedAt,dateSolicitude,timeInit,timeEnd,estado) VALUES (1,1,1,null,'Taller RFID',now(),STR_TO_DATE('23-05-2018', '%d-%m-%Y'),null,null,'ABIERTA');
INSERT INTO SOLICITUDE (idLaboratory,idStudent,idLesson,idManager,practics,solicitedAt,dateSolicitude,timeInit,timeEnd,estado) VALUES (1,1,2,null,'Taller de algo',now(),STR_TO_DATE('23-05-2018', '%d-%m-%Y'),null,null,'ABIERTA');
INSERT INTO SOLICITUDE (idLaboratory,idStudent,idLesson,idManager,practics,solicitedAt,dateSolicitude,timeInit,timeEnd,estado) VALUES (1,1,null,null,'Libre',now(),STR_TO_DATE('23-05-2018', '%d-%m-%Y'),null,null,'ABIERTA');

INSERT INTO MATERIAL_SOLICITUDE (idMaterial,idSolicitude) VALUES (1,1);
INSERT INTO MATERIAL_SOLICITUDE (idMaterial,idSolicitude) VALUES (2,1);
INSERT INTO MATERIAL_SOLICITUDE (idMaterial,idSolicitude) VALUES (3,2);
INSERT INTO MATERIAL_SOLICITUDE (idMaterial,idSolicitude) VALUES (2,2);
INSERT INTO MATERIAL_SOLICITUDE (idMaterial,idSolicitude) VALUES (1,2);
INSERT INTO MATERIAL_SOLICITUDE (idMaterial,idSolicitude) VALUES (4,3);
INSERT INTO MATERIAL_SOLICITUDE (idMaterial,idSolicitude) VALUES (5,3);
