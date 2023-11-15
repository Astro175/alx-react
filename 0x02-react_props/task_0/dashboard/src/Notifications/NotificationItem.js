import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  console.log('type prop:', type); 
  return (
    <>
      {html ? (
        <li data-notification-type={type} dangerouslySetInnerHTML={ html } />
      ) : (
        type && value && <li data-notification-type={type}>{value}</li>
      )}
    </>
  );
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string,
  value: PropTypes.string
}

NotificationItem.defaultProps = {
  type: 'default'
}

export default NotificationItem;
