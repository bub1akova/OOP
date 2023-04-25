// BEGIN
export function Point (x, y) {
    this.x = x
    this.y = y

this.getX = function() {
    return this.x
 }

  this.getY = function() {
    return this.y
 }
}

export function Segment (beginPoint, endPoint) {
    this.getBeginPoint = () => beginPoint
    this.getEndPoint = () => endPoint
}

export function reverse (segment) {
    const end = new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY());
    const begin = new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY());

    return new Segment(end, begin);
}

// END
