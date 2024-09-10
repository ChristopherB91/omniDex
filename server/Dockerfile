FROM maven:3.8.6-openjdk-18 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:22-jdk
COPY --from=build target/Primus-0.0.1-SNAPSHOT.jar Primus.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/Primus.jar"]