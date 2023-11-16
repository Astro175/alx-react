import { shallow } from 'enzyme';
import { getLatestNotification } from '../utils';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';

  it('Check if the menu item is displayed, if displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const item = wrapper.find('.menuItem');
    expect(item.exists()).toBe(true);
  });

  it('Check if the notification div is not displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const item = wrapper.find('.Notifications');
    expect(item.exists()).toBe(false);
  });

  it('Check if the menuItem displays when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const item = wrapper.find('.menuItem');
    expect(item.exists()).toBe(true);
  });

  it('Check if the notification div is not displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const item = wrapper.find('.Notifications');
    expect(item.exists()).toBe(true);
  });

  it('Checks when listNotifications is empty or wrong proptype', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    const text = wrapper.contains('No new notification for now');
    expect(text).toBe(true);
  });
  it('Checks if it parses the listNotication well', () => {
    const listNotifications = [
      {
        id: 1, type: 'default', value: 'New course available'
      },
      {
        id: 2, type: 'urgent', value: 'New resume available'
      },
      {
        id: 3, type: '', html: { __html: getLatestNotification() }
      }
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications}/>);
    const items = wrapper.find(NotificationItem);
    expect(items).toHaveLength(3);
  });
  it('Checks when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    const text = wrapper.contains('Here is the list of notifications');
    expect(text).toBe(false);
});