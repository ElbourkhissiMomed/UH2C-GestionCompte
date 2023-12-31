import { animate, animation, style } from '@angular/animations';
export const expandAnimation = animation([
    animate('{{ time }} {{ easing }}')
]);
export const collapseAnimation = animation([
    style({ height: '*', minHeight: '*' }),
    animate('{{ time }} {{ easing }}', style({ height: 0, minHeight: 0 }))
]);
export const expandHorizontalAnimation = animation([
    animate('{{ time }} {{ easing }}')
]);
export const collapseHorizontalAnimation = animation([
    // style({ opacity: '*' }),
    animate('{{ time }} {{ easing }}'
    // style({ opacity: 0 })
    )
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvY29sbGFwc2UvY29sbGFwc2UuYW5pbWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVoRSxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ3ZDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQztDQUNuQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxTQUFTLENBQUM7SUFDekMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDdEMsT0FBTyxDQUFDLHlCQUF5QixFQUMvQixLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUNuQztDQUNGLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLFNBQVMsQ0FBQztJQUNqRCxPQUFPLENBQUMseUJBQXlCLENBQUM7Q0FDbkMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUcsU0FBUyxDQUFDO0lBQ25ELDJCQUEyQjtJQUMzQixPQUFPLENBQ0wseUJBQXlCO0lBQ3pCLHdCQUF3QjtLQUN6QjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIGFuaW1hdGlvbiwgc3R5bGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IGV4cGFuZEFuaW1hdGlvbiA9IGFuaW1hdGlvbihbXG4gIGFuaW1hdGUoJ3t7IHRpbWUgfX0ge3sgZWFzaW5nIH19Jylcbl0pO1xuXG5leHBvcnQgY29uc3QgY29sbGFwc2VBbmltYXRpb24gPSBhbmltYXRpb24oW1xuICBzdHlsZSh7IGhlaWdodDogJyonLCBtaW5IZWlnaHQ6ICcqJyB9KSxcbiAgYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nLFxuICAgIHN0eWxlKHsgaGVpZ2h0OiAwLCBtaW5IZWlnaHQ6IDAgfSlcbiAgKVxuXSk7XG5cbmV4cG9ydCBjb25zdCBleHBhbmRIb3Jpem9udGFsQW5pbWF0aW9uID0gYW5pbWF0aW9uKFtcbiAgYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nKVxuXSk7XG5cbmV4cG9ydCBjb25zdCBjb2xsYXBzZUhvcml6b250YWxBbmltYXRpb24gPSBhbmltYXRpb24oW1xuICAvLyBzdHlsZSh7IG9wYWNpdHk6ICcqJyB9KSxcbiAgYW5pbWF0ZShcbiAgICAne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nXG4gICAgLy8gc3R5bGUoeyBvcGFjaXR5OiAwIH0pXG4gIClcbl0pO1xuIl19