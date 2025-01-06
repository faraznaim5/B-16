import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping
    public String getUser () {
        return "GET request received";
    }

    @PostMapping
    public String registerUser (@RequestParam String username) {
        return "User  registered: " + username;
    }
}
