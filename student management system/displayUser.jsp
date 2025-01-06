<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>User Data</title>
</head>
<body>
    <h2>User Data</h2>
    <c:if test="${not empty user}">
        <p>Username: ${user.username}</p>
    </c:if>
</body>
</html>
