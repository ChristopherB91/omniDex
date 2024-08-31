FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY server/target/Primus-0.0.1-SNAPSHOT.jar Primus.jar
ENTRYPOINT ["java","-jar","/Primus.jar"]
