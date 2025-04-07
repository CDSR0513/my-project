class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    calArea() {
      return this.height * this.width;
    }
  }
  
  function calculateArea() {
    const height = parseFloat(document.getElementById('height').value);
    const width = parseFloat(document.getElementById('width').value);
  
    if (isNaN(height) || isNaN(width)) {
      document.getElementById('result').innerText = "숫자를 입력해주세요.";
      return;
    }
  
    const rect = new Rectangle(height, width);
    const area = rect.calArea();
  
    document.getElementById('result').innerText = `사각형의 넓이: ${area}`;
  }
  