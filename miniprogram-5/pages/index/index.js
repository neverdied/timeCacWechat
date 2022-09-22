const app = getApp()

Page({
  data: {
    isPickerRender: false,
    isPickerShow: false,
    startTime: new Date().toJSON().substring(0, 10) + ' ' + new Date().toTimeString().substring(0,8),
    endTime: new Date().toJSON().substring(0, 10) + ' ' + new Date().toTimeString().substring(0,8),
    disH:"0",
    disM:"0",
    disS:"0",
    pickerConfig: {
      endDate: true,
      column: "second",
      dateLimit: true,
      initStartTime: new Date().toJSON().substring(0, 10) + ' ' + new Date().toTimeString().substring(0,8),
      initEndTime: new Date().toJSON().substring(0, 10) + ' ' + new Date().toTimeString().substring(0,8),
      limitStartTime: "2010-00-00 12:32:44",
      limitEndTime: "2030-00-00 12:32:44"
    }
  },
  onLoad: function() {
    console.log()

  },
  pickerShow: function() {
    this.setData({
      isPickerShow: true,
      isPickerRender: true,
      chartHide: true
    });
  },
  pickerHide: function() {
    this.setData({
      isPickerShow: false,
      chartHide: false
    });
  },

  bindPickerChange: function(e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    console.log(this.data.sensorList);

    this.getData(this.data.sensorList[e.detail.value].id);
    // let startDate = util.formatTime(new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 7));
    // let endDate = util.formatTime(new Date());
    this.setData({
      index: e.detail.value,
      sensorId: this.data.sensorList[e.detail.value].id
      // startDate,
      // endDate
    });
  },
  setPickerTime: function(val) {
    console.log(val);
    var dis=new Date(val.detail.endTime)-new Date(val.detail.startTime);
    console.log(dis/1000);
    let data = val.detail;
    this.setData({
      startTime: data.startTime,
      endTime: data.endTime,
      disH:parseInt(dis/(1000*60*60)),
      disM:parseInt((dis%(1000*60*60))/(1000*60)),
      disS:parseInt((dis%(1000*60))/1000),
    });

  }
});
