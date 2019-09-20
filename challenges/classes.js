/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMakers {
    constructor(attr){
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
    }
    volume(){
        return this.length * this.width * this.height
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
  }
  
  const cuboids = new CuboidMakers ({
    length: 4,
    width: 5,
    height: 5
  })
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboids.volume()); // 100
  console.log(cuboids.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.