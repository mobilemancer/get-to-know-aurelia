export class CakeModValueConverter {
  toView(value) {
    const result = value.replace(/cake/i, 'hologram');
    return result;
  }

  fromView(value) {

  }
}

