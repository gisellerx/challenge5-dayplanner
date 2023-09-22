$(function () {

  var currentDayEL = $("#currentDay")
  var currentDayTime = dayjs().format("dddd, MMMM D")
  var saveBtn = $(".saveBtn")

  console.log(currentDayTime)

  currentDayEL.text(currentDayTime)

  // Current hour is in military time
  var currentHour = dayjs().hour()

  console.log(currentHour)

  // Create loop to get all the time block ids, starting from 9
  // Compare the i with current hour
  for (let i = 9; i < 18; i++) {

    var timeBlock = $("#hour-" + i)
    var event = localStorage.getItem("hour-"+i)

    timeBlock.children("textarea").val(event)

    console.log(event)

    if (i===currentHour) {

      timeBlock.addClass("present")
    }
    else if (i<currentHour) {
      timeBlock.addClass("past")
    }
    else {
      timeBlock.addClass("future")
    }
    
  }

  function saveEvent(event) {
    var currentButton = $(event.target)
    var textArea = currentButton.siblings("textarea")
    var parentId = currentButton.parent().attr("id")

    alert(textArea.val() +" "+ parentId)

    localStorage.setItem(parentId, textArea.val())

  }

  saveBtn.on("click", saveEvent)

});
