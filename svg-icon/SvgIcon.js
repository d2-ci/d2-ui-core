'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

var _apps = require('material-ui/svg-icons/navigation/apps');

var _apps2 = _interopRequireDefault(_apps);

var _arrowDownward = require('material-ui/svg-icons/navigation/arrow-downward');

var _arrowDownward2 = _interopRequireDefault(_arrowDownward);

var _navigationArrowDropRight = require('material-ui/svg-icons/navigation-arrow-drop-right');

var _navigationArrowDropRight2 = _interopRequireDefault(_navigationArrowDropRight);

var _arrowUpward = require('material-ui/svg-icons/navigation/arrow-upward');

var _arrowUpward2 = _interopRequireDefault(_arrowUpward);

var _business = require('material-ui/svg-icons/communication/business');

var _business2 = _interopRequireDefault(_business);

var _cancel = require('material-ui/svg-icons/navigation/cancel');

var _cancel2 = _interopRequireDefault(_cancel);

var _chevronLeft = require('material-ui/svg-icons/navigation/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('material-ui/svg-icons/navigation/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _clear = require('material-ui/svg-icons/content/clear');

var _clear2 = _interopRequireDefault(_clear);

var _close = require('material-ui/svg-icons/navigation/close');

var _close2 = _interopRequireDefault(_close);

var _create = require('material-ui/svg-icons/content/create');

var _create2 = _interopRequireDefault(_create);

var _cropFree = require('material-ui/svg-icons/image/crop-free');

var _cropFree2 = _interopRequireDefault(_cropFree);

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

var _description = require('material-ui/svg-icons/action/description');

var _description2 = _interopRequireDefault(_description);

var _done = require('material-ui/svg-icons/action/done');

var _done2 = _interopRequireDefault(_done);

var _dragHandle = require('material-ui/svg-icons/editor/drag-handle');

var _dragHandle2 = _interopRequireDefault(_dragHandle);

var _email = require('material-ui/svg-icons/communication/email');

var _email2 = _interopRequireDefault(_email);

var _extension = require('material-ui/svg-icons/action/extension');

var _extension2 = _interopRequireDefault(_extension);

var _fontDownload = require('material-ui/svg-icons/content/font-download');

var _fontDownload2 = _interopRequireDefault(_fontDownload);

var _group = require('material-ui/svg-icons/social/group');

var _group2 = _interopRequireDefault(_group);

var _gridOn = require('material-ui/svg-icons/image/grid-on');

var _gridOn2 = _interopRequireDefault(_gridOn);

var _info = require('material-ui/svg-icons/action/info');

var _info2 = _interopRequireDefault(_info);

var _infoOutline = require('material-ui/svg-icons/action/info-outline');

var _infoOutline2 = _interopRequireDefault(_infoOutline);

var _insertChart = require('material-ui/svg-icons/editor/insert-chart');

var _insertChart2 = _interopRequireDefault(_insertChart);

var _list = require('material-ui/svg-icons/action/list');

var _list2 = _interopRequireDefault(_list);

var _launch = require('material-ui/svg-icons/action/launch');

var _launch2 = _interopRequireDefault(_launch);

var _message = require('material-ui/svg-icons/communication/message');

var _message2 = _interopRequireDefault(_message);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

var _moreHoriz = require('material-ui/svg-icons/navigation/more-horiz');

var _moreHoriz2 = _interopRequireDefault(_moreHoriz);

var _notInterested = require('material-ui/svg-icons/av/not-interested');

var _notInterested2 = _interopRequireDefault(_notInterested);

var _person = require('material-ui/svg-icons/social/person');

var _person2 = _interopRequireDefault(_person);

var _public = require('material-ui/svg-icons/social/public');

var _public2 = _interopRequireDefault(_public);

var _reply = require('material-ui/svg-icons/content/reply');

var _reply2 = _interopRequireDefault(_reply);

var _room = require('material-ui/svg-icons/action/room');

var _room2 = _interopRequireDefault(_room);

var _search = require('material-ui/svg-icons/action/search');

var _search2 = _interopRequireDefault(_search);

var _showChart = require('material-ui/svg-icons/editor/show-chart');

var _showChart2 = _interopRequireDefault(_showChart);

var _star = require('material-ui/svg-icons/toggle/star');

var _star2 = _interopRequireDefault(_star);

var _starBorder = require('material-ui/svg-icons/toggle/star-border');

var _starBorder2 = _interopRequireDefault(_starBorder);

var _thumbUp = require('material-ui/svg-icons/action/thumb-up');

var _thumbUp2 = _interopRequireDefault(_thumbUp);

var _viewList = require('material-ui/svg-icons/action/view-list');

var _viewList2 = _interopRequireDefault(_viewList);

var _visibility = require('material-ui/svg-icons/action/visibility');

var _visibility2 = _interopRequireDefault(_visibility);

var _visibilityOff = require('material-ui/svg-icons/action/visibility-off');

var _visibilityOff2 = _interopRequireDefault(_visibilityOff);

var _sentimentDissatisfied = require('material-ui/svg-icons/social/sentiment-dissatisfied');

var _sentimentDissatisfied2 = _interopRequireDefault(_sentimentDissatisfied);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
    Add: _add2.default,
    Apps: _apps2.default,
    ArrowDownward: _arrowDownward2.default,
    ArrowDropRight: _navigationArrowDropRight2.default,
    ArrowUpward: _arrowUpward2.default,
    Business: _business2.default,
    Cancel: _cancel2.default,
    ChevronLeft: _chevronLeft2.default,
    ChevronRight: _chevronRight2.default,
    Clear: _clear2.default,
    Close: _close2.default,
    Create: _create2.default,
    CropFree: _cropFree2.default,
    Delete: _delete2.default,
    Description: _description2.default,
    Done: _done2.default,
    DragHandle: _dragHandle2.default,
    Email: _email2.default,
    Extension: _extension2.default,
    FontDownload: _fontDownload2.default,
    GridOn: _gridOn2.default,
    Group: _group2.default,
    Info: _info2.default,
    InfoOutline: _infoOutline2.default,
    InsertChart: _insertChart2.default,
    List: _list2.default,
    Launch: _launch2.default,
    Message: _message2.default,
    MoreVert: _moreVert2.default,
    MoreHoriz: _moreHoriz2.default,
    NotInterested: _notInterested2.default,
    Person: _person2.default,
    Public: _public2.default,
    Reply: _reply2.default,
    Room: _room2.default,
    Search: _search2.default,
    ShowChart: _showChart2.default,
    Star: _star2.default,
    StarBorder: _starBorder2.default,
    ThumbUp: _thumbUp2.default,
    ViewList: _viewList2.default,
    Visibility: _visibility2.default,
    VisibilityOff: _visibilityOff2.default
};

var SvgIcon = function SvgIcon(_ref) {
    var icon = _ref.icon,
        children = _ref.children,
        className = _ref.className,
        disabled = _ref.disabled,
        style = _ref.style;

    var Icon = null;
    if (children && !icons[icon]) {
        Icon = _SvgIcon2.default;
    } else {
        Icon = icons[icon] || _sentimentDissatisfied2.default;
    }

    return _react2.default.createElement(
        Icon,
        {
            className: className,
            style: (0, _extends3.default)({}, style, {
                fill: style.fill || (disabled ? _colors.grey200 : _colors.grey600)
            })
        },
        children
    );
};

SvgIcon.propTypes = {
    /**
     * Name of the material icon to render
     */
    icon: _propTypes2.default.string,

    /**
     * A node representing a custom svg
     */
    children: _propTypes2.default.node,

    /**
     * The class name to apply to the component
     */
    className: _propTypes2.default.string,

    /**
     * Whether icon should have a disabled look
     */
    disabled: _propTypes2.default.bool,

    /**
     * Pass inline styles to the root element
     */
    style: _propTypes2.default.object
};

SvgIcon.defaultProps = {
    icon: '',
    children: null,
    className: '',
    disabled: false,
    style: {}
};

exports.default = SvgIcon;