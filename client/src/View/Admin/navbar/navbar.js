import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './navbar.css';






export default function Minibar(){
  return(
<nav class="navbar mininav navbar-expand-lg navbar-light bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ADMIN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/User">Userdata</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Feed">FeedbackData</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/DonateList">DonationList</a>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
  )}