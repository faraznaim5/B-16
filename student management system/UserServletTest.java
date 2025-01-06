import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import java.io.PrintWriter;
import java.io.IOException;

import static org.mockito.Mockito.*;

public class UserServletTest {

    private UserServlet userServlet;
    private HttpServletRequest request;
    private HttpServletResponse response;
    private PrintWriter writer;

    @BeforeEach
    public void setUp() throws IOException {
        userServlet = new UserServlet();
        request = mock(HttpServletRequest.class);
        response = mock(HttpServletResponse.class);
        writer = mock(PrintWriter.class);
        when(response.getWriter()).thenReturn(writer);
    }

    @Test
    public void testDoGet() throws ServletException, IOException {
        userServlet.doGet(request, response);
        verify(writer).println("GET request received");
    }

    @Test
    public void testDoPost() throws ServletException, IOException {
        when(request.getParameter("username")).thenReturn("testUser ");
        userServlet.doPost(request, response);
        verify(writer).println("User   registered: testUser ");
    }
}
