import _extends from 'babel-runtime/helpers/extends';
import React from 'react';
import PropTypes from 'prop-types';
import Add from 'material-ui/svg-icons/content/add';
import Apps from 'material-ui/svg-icons/navigation/apps';
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import Business from 'material-ui/svg-icons/communication/business';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import Clear from 'material-ui/svg-icons/content/clear';
import Close from 'material-ui/svg-icons/navigation/close';
import Create from 'material-ui/svg-icons/content/create';
import CropFree from 'material-ui/svg-icons/image/crop-free';
import Delete from 'material-ui/svg-icons/action/delete';
import Description from 'material-ui/svg-icons/action/description';
import Done from 'material-ui/svg-icons/action/done';
import DragHandle from 'material-ui/svg-icons/editor/drag-handle';
import Email from 'material-ui/svg-icons/communication/email';
import Extension from 'material-ui/svg-icons/action/extension';
import FontDownload from 'material-ui/svg-icons/content/font-download';
import Group from 'material-ui/svg-icons/social/group';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import Info from 'material-ui/svg-icons/action/info';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';
import InsertChart from 'material-ui/svg-icons/editor/insert-chart';
import List from 'material-ui/svg-icons/action/list';
import Launch from 'material-ui/svg-icons/action/launch';
import Message from 'material-ui/svg-icons/communication/message';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import MoreHoriz from 'material-ui/svg-icons/navigation/more-horiz';
import NotInterested from 'material-ui/svg-icons/av/not-interested';
import Person from 'material-ui/svg-icons/social/person';
import Public from 'material-ui/svg-icons/social/public';
import Reply from 'material-ui/svg-icons/content/reply';
import Room from 'material-ui/svg-icons/action/room';
import Search from 'material-ui/svg-icons/action/search';
import ShowChart from 'material-ui/svg-icons/editor/show-chart';
import Star from 'material-ui/svg-icons/toggle/star';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ViewList from 'material-ui/svg-icons/action/view-list';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import SentimentDissatisfied from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import MUISvgIcon from 'material-ui/SvgIcon';
import { grey600, grey200 } from 'material-ui/styles/colors';

var icons = {
    Add: Add,
    Apps: Apps,
    ArrowDownward: ArrowDownward,
    ArrowDropRight: ArrowDropRight,
    ArrowUpward: ArrowUpward,
    Business: Business,
    Cancel: Cancel,
    ChevronLeft: ChevronLeft,
    ChevronRight: ChevronRight,
    Clear: Clear,
    Close: Close,
    Create: Create,
    CropFree: CropFree,
    Delete: Delete,
    Description: Description,
    Done: Done,
    DragHandle: DragHandle,
    Email: Email,
    Extension: Extension,
    FontDownload: FontDownload,
    GridOn: GridOn,
    Group: Group,
    Info: Info,
    InfoOutline: InfoOutline,
    InsertChart: InsertChart,
    List: List,
    Launch: Launch,
    Message: Message,
    MoreVert: MoreVert,
    MoreHoriz: MoreHoriz,
    NotInterested: NotInterested,
    Person: Person,
    Public: Public,
    Reply: Reply,
    Room: Room,
    Search: Search,
    ShowChart: ShowChart,
    Star: Star,
    StarBorder: StarBorder,
    ThumbUp: ThumbUp,
    ViewList: ViewList,
    Visibility: Visibility,
    VisibilityOff: VisibilityOff
};

var SvgIcon = function SvgIcon(_ref) {
    var icon = _ref.icon,
        children = _ref.children,
        className = _ref.className,
        disabled = _ref.disabled,
        style = _ref.style;

    var Icon = null;
    if (children && !icons[icon]) {
        Icon = MUISvgIcon;
    } else {
        Icon = icons[icon] || SentimentDissatisfied;
    }

    return React.createElement(
        Icon,
        {
            className: className,
            style: _extends({}, style, {
                fill: style.fill || (disabled ? grey200 : grey600)
            })
        },
        children
    );
};

SvgIcon.propTypes = {
    /**
     * Name of the material icon to render
     */
    icon: PropTypes.string,

    /**
     * A node representing a custom svg
     */
    children: PropTypes.node,

    /**
     * The class name to apply to the component
     */
    className: PropTypes.string,

    /**
     * Whether icon should have a disabled look
     */
    disabled: PropTypes.bool,

    /**
     * Pass inline styles to the root element
     */
    style: PropTypes.object
};

SvgIcon.defaultProps = {
    icon: '',
    children: null,
    className: '',
    disabled: false,
    style: {}
};

export default SvgIcon;