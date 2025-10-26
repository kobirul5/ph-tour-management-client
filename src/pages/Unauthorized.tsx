import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Unauthorized() {
  return (
    <div>
        You are not Authorized <br/>
        <Button>
            <Link to="/">Home</Link>
        </Button>
    </div>
  )
}
