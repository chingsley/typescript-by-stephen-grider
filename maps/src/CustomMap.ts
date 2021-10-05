export interface Mappable {
  location: { lat: number; lng: number; };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  // method 1 to add marker, by passing the coordinates directly
  addMarker({ lat, lng }: { lat: number; lng: number; }): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: { lat, lng }
    });
  }

  // method 2 to add add marker, using interface
  addMarkerv2(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}