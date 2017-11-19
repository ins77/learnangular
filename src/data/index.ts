import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

const places: Place[] = [
  {
    hotel_info: {
      img: 'assets/images/1.jpg',
      contacts: [
        {
          address: 'Sed perspiciatis Et harum quidem',
          phone: 1285968685,
          photos: [
            {
              img: 'assets/images/res.jpg'
            },
            {
              img: 'assets/images/r1.jpg'
            }
          ]
        },
        {
          address: 'Sed perspiciatis Et harum quidem',
          phone: 1285968685,
          photos: [
            {
              img: 'assets/images/res.jpg'
            },
            {
              img: 'assets/images/r1.jpg'
            }
          ]
        },
        {
          address: 'Sed perspiciatis Et harum quidem',
          phone: 1285968685,
          photos: [
            {
              img: 'assets/images/res.jpg'
            },
            {
              img: 'assets/images/r1.jpg'
            }
          ]
        },
      ]
    },
    weather: {
      title: 'Et harum quidem',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT' +
      '2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8' +
      'igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAi' +
      'zZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAt' +
      'AGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7A' +
      'GDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM' +
      '4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2e' +
      'Xk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5Em' +
      'ozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAX' +
      'kQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj' +
      '1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEc' +
      'xlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwD' +
      'u4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQS' +
      'iUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlm' +
      'DJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBm' +
      'bGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVq' +
      'p1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1e' +
      'zUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU' +
      '9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcN' +
      'AQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2Bae' +
      'Fostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6T' +
      'vZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3' +
      'IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7' +
      'xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4' +
      'KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5q' +
      'PNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdy' +
      'WOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2' +
      'y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rG' +
      'o5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cV' +
      'f9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVP' +
      'RU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRS' +
      'j9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5' +
      'w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT' +
      '8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3' +
      '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',
      water: 20,
      temperature: 14
    },
    social_info: {
      title: 'Nam libero voluptatem',
      img: 'assets/images/b1.jpg',
      followers: 2850,
      following: 675
    },
    type: [
      {
        title: 'Hotel'
      },
      {
        title: 'Fishing'
      },
      {
        title: 'Tours'
      },
      {
        title: 'Health'
      }
    ]
  }
];

export const places$: Observable<Place[]> =
  Observable.of(places)
    .delay(2000);
