
const PublicIssue = (props) => {
  const { title, description, imgUrl, user, createdAt } = props;

  const firstLetter = user.username.charAt(0).toUpperCase();
  const usernameCased = user.username.charAt(0).toUpperCase() + user.username.slice(1).toLowerCase();
  
  // Calculate the time elapsed since the issue was posted
  const ONE_MINUTE = 60;
  const ONE_HOUR = 60 * ONE_MINUTE;
  const ONE_DAY = 24 * ONE_HOUR;
  let timeElapsedStr = "";
  const timeElapsed = Math.floor((Date.now() - new Date(createdAt)) / 1000); // in seconds

  if (timeElapsed < ONE_MINUTE) {
    timeElapsedStr = `${timeElapsed} seconds ago`;
  } else if (timeElapsed < ONE_HOUR) {
    const minutes = Math.floor(timeElapsed / ONE_MINUTE);
    timeElapsedStr = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (timeElapsed < ONE_DAY) {
    const hours = Math.floor(timeElapsed / ONE_HOUR);
    timeElapsedStr = `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else {
    const days = Math.floor(timeElapsed / ONE_DAY);
    timeElapsedStr = `${days} day${days > 1 ? "s" : ""} ago`;
  }

  return (
    <div className="issue-container">
    <div>
      <div className="user-info">
      <div className="profile-pic">{firstLetter}</div>
      <div className="name-time">
        <div>
          <h3>{usernameCased}</h3>
          <p>{timeElapsedStr}</p>
        </div>
      </div>
      </div>
      <div className="issue-wrapper">
        <div className="issue-div">
          <h3 className="issue-title">{title}</h3>
          <p className="issue-des">{description}</p>
          <img className="issue-img" src={imgUrl} alt={title} width={300} />
        </div>
      </div>
    </div>  
  </div>
  );
};

export default PublicIssue;
