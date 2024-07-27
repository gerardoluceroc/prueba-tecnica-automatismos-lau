FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} appServerSpringBoot.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/appServerSpringBoot.jar"]