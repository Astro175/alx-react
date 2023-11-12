const NotificationItem = ({ type, html, value }) => {
  console.log('type prop:', type); 
  return (
    <>
      {html ? (
        <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        type && value && <li data-notification-type={type}>{value}</li>
      )}
    </>
  );
};

export default NotificationItem;
