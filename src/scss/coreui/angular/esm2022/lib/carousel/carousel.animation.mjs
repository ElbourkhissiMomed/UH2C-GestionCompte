import { animate, group, query, state, style, transition, trigger, } from '@angular/animations';
export function toLeft(fromState, toState) {
    return toState.left === true;
}
export function toRight(fromState, toState) {
    return toState.left === false;
}
export const slideAnimation = trigger('slideAnimation', [
    state('*', style({ transform: 'translateX(0)', display: 'block', opacity: 1 })),
    transition(toLeft, group([
        query(':leave', [
            animate('0.6s ease-in-out', style({
                transform: 'translateX(-100%)',
            })),
        ], { optional: true }),
        query(':enter', [
            style({
                transform: 'translateX(100%)',
            }),
            animate('0.6s ease-in-out', style('*')),
        ], { optional: true }),
    ])),
    transition(toRight, group([
        query(':enter', [
            style({
                transform: 'translateX(-100%)',
            }),
            animate('0.6s ease-in-out', style('*')),
        ], { optional: true }),
        query(':leave', [
            animate('0.6s ease-in-out', style({
                transform: 'translateX(100%)',
            })),
        ], { optional: true }),
    ])),
]);
export const fadeAnimation = trigger('fadeAnimation', [
    state('*', style({ zIndex: 1, opacity: 1 })),
    transition(toLeft, group([
        query(':leave', [
            animate('0.6s ease-in-out', style({
                zIndex: 0,
                opacity: 0,
            })),
        ], { optional: true }),
        query(':enter', [
            style({
                zIndex: 1,
                opacity: 1
            }),
            animate('0.6s ease-in-out', style('*')),
        ], { optional: true }),
    ])),
    transition(toRight, group([
        query(':enter', [
            style({
                zIndex: 1,
                opacity: 1
            }),
            animate('0.6s ease-in-out', style('*')),
        ], { optional: true }),
        query(':leave', [
            animate('0.6s ease-in-out', style({
                zIndex: 0,
                opacity: 0,
            })),
        ], { optional: true }),
    ])),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9jYXJvdXNlbC9jYXJvdXNlbC5hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sR0FDUixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE1BQU0sVUFBVSxNQUFNLENBQUMsU0FBYyxFQUFFLE9BQVk7SUFDakQsT0FBTyxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztBQUMvQixDQUFDO0FBQ0QsTUFBTSxVQUFVLE9BQU8sQ0FBQyxTQUFjLEVBQUUsT0FBWTtJQUNsRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDO0FBQ2hDLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFO0lBQ3RELEtBQUssQ0FDSCxHQUFHLEVBQ0gsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUNwRTtJQUNELFVBQVUsQ0FDUixNQUFNLEVBQ04sS0FBSyxDQUFDO1FBQ0osS0FBSyxDQUNILFFBQVEsRUFDUjtZQUNFLE9BQU8sQ0FDTCxrQkFBa0IsRUFDbEIsS0FBSyxDQUFDO2dCQUNKLFNBQVMsRUFBRSxtQkFBbUI7YUFDL0IsQ0FBQyxDQUNIO1NBQ0YsRUFDRCxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FDbkI7UUFDRCxLQUFLLENBQ0gsUUFBUSxFQUNSO1lBQ0UsS0FBSyxDQUFDO2dCQUNKLFNBQVMsRUFBRSxrQkFBa0I7YUFDOUIsQ0FBQztZQUNGLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEMsRUFDRCxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FDbkI7S0FDRixDQUFDLENBQ0g7SUFDRCxVQUFVLENBQ1IsT0FBTyxFQUNQLEtBQUssQ0FBQztRQUNKLEtBQUssQ0FDSCxRQUFRLEVBQ1I7WUFDRSxLQUFLLENBQUM7Z0JBQ0osU0FBUyxFQUFFLG1CQUFtQjthQUMvQixDQUFDO1lBQ0YsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QyxFQUNELEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUNuQjtRQUNELEtBQUssQ0FDSCxRQUFRLEVBQ1I7WUFDRSxPQUFPLENBQ0wsa0JBQWtCLEVBQ2xCLEtBQUssQ0FBQztnQkFDSixTQUFTLEVBQUUsa0JBQWtCO2FBQzlCLENBQUMsQ0FDSDtTQUNGLEVBQ0QsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQ25CO0tBQ0YsQ0FBQyxDQUNIO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxlQUFlLEVBQUU7SUFDcEQsS0FBSyxDQUNILEdBQUcsRUFDSCxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUNqQztJQUNELFVBQVUsQ0FDUixNQUFNLEVBQ04sS0FBSyxDQUFDO1FBQ0osS0FBSyxDQUNILFFBQVEsRUFDUjtZQUNFLE9BQU8sQ0FDTCxrQkFBa0IsRUFDbEIsS0FBSyxDQUFDO2dCQUNKLE1BQU0sRUFBRSxDQUFDO2dCQUNULE9BQU8sRUFBRSxDQUFDO2FBQ1gsQ0FBQyxDQUNIO1NBQ0YsRUFDRCxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FDbkI7UUFDRCxLQUFLLENBQ0gsUUFBUSxFQUNSO1lBQ0UsS0FBSyxDQUFDO2dCQUNKLE1BQU0sRUFBRSxDQUFDO2dCQUNULE9BQU8sRUFBRSxDQUFDO2FBQ1gsQ0FBQztZQUNGLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEMsRUFDRCxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FDbkI7S0FDRixDQUFDLENBQ0g7SUFDRCxVQUFVLENBQ1IsT0FBTyxFQUNQLEtBQUssQ0FBQztRQUNKLEtBQUssQ0FDSCxRQUFRLEVBQ1I7WUFDRSxLQUFLLENBQUM7Z0JBQ0osTUFBTSxFQUFFLENBQUM7Z0JBQ1QsT0FBTyxFQUFFLENBQUM7YUFDWCxDQUFDO1lBQ0YsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QyxFQUNELEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUNuQjtRQUNELEtBQUssQ0FDSCxRQUFRLEVBQ1I7WUFDRSxPQUFPLENBQ0wsa0JBQWtCLEVBQ2xCLEtBQUssQ0FBQztnQkFDSixNQUFNLEVBQUUsQ0FBQztnQkFDVCxPQUFPLEVBQUUsQ0FBQzthQUNYLENBQUMsQ0FDSDtTQUNGLEVBQ0QsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQ25CO0tBQ0YsQ0FBQyxDQUNIO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgZ3JvdXAsXG4gIHF1ZXJ5LFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9MZWZ0KGZyb21TdGF0ZTogYW55LCB0b1N0YXRlOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHRvU3RhdGUubGVmdCA9PT0gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1JpZ2h0KGZyb21TdGF0ZTogYW55LCB0b1N0YXRlOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHRvU3RhdGUubGVmdCA9PT0gZmFsc2U7XG59XG5cbmV4cG9ydCBjb25zdCBzbGlkZUFuaW1hdGlvbiA9IHRyaWdnZXIoJ3NsaWRlQW5pbWF0aW9uJywgW1xuICBzdGF0ZShcbiAgICAnKicsXG4gICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSB9KVxuICApLFxuICB0cmFuc2l0aW9uKFxuICAgIHRvTGVmdCxcbiAgICBncm91cChbXG4gICAgICBxdWVyeShcbiAgICAgICAgJzpsZWF2ZScsXG4gICAgICAgIFtcbiAgICAgICAgICBhbmltYXRlKFxuICAgICAgICAgICAgJzAuNnMgZWFzZS1pbi1vdXQnLFxuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIHsgb3B0aW9uYWw6IHRydWUgfVxuICAgICAgKSxcbiAgICAgIHF1ZXJ5KFxuICAgICAgICAnOmVudGVyJyxcbiAgICAgICAgW1xuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGFuaW1hdGUoJzAuNnMgZWFzZS1pbi1vdXQnLCBzdHlsZSgnKicpKSxcbiAgICAgICAgXSxcbiAgICAgICAgeyBvcHRpb25hbDogdHJ1ZSB9XG4gICAgICApLFxuICAgIF0pXG4gICksXG4gIHRyYW5zaXRpb24oXG4gICAgdG9SaWdodCxcbiAgICBncm91cChbXG4gICAgICBxdWVyeShcbiAgICAgICAgJzplbnRlcicsXG4gICAgICAgIFtcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYW5pbWF0ZSgnMC42cyBlYXNlLWluLW91dCcsIHN0eWxlKCcqJykpLFxuICAgICAgICBdLFxuICAgICAgICB7IG9wdGlvbmFsOiB0cnVlIH1cbiAgICAgICksXG4gICAgICBxdWVyeShcbiAgICAgICAgJzpsZWF2ZScsXG4gICAgICAgIFtcbiAgICAgICAgICBhbmltYXRlKFxuICAgICAgICAgICAgJzAuNnMgZWFzZS1pbi1vdXQnLFxuICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgXSxcbiAgICAgICAgeyBvcHRpb25hbDogdHJ1ZSB9XG4gICAgICApLFxuICAgIF0pXG4gICksXG5dKTtcblxuZXhwb3J0IGNvbnN0IGZhZGVBbmltYXRpb24gPSB0cmlnZ2VyKCdmYWRlQW5pbWF0aW9uJywgW1xuICBzdGF0ZShcbiAgICAnKicsXG4gICAgc3R5bGUoeyB6SW5kZXg6IDEsIG9wYWNpdHk6IDEgfSlcbiAgKSxcbiAgdHJhbnNpdGlvbihcbiAgICB0b0xlZnQsXG4gICAgZ3JvdXAoW1xuICAgICAgcXVlcnkoXG4gICAgICAgICc6bGVhdmUnLFxuICAgICAgICBbXG4gICAgICAgICAgYW5pbWF0ZShcbiAgICAgICAgICAgICcwLjZzIGVhc2UtaW4tb3V0JyxcbiAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgekluZGV4OiAwLFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICB7IG9wdGlvbmFsOiB0cnVlIH1cbiAgICAgICksXG4gICAgICBxdWVyeShcbiAgICAgICAgJzplbnRlcicsXG4gICAgICAgIFtcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYW5pbWF0ZSgnMC42cyBlYXNlLWluLW91dCcsIHN0eWxlKCcqJykpLFxuICAgICAgICBdLFxuICAgICAgICB7IG9wdGlvbmFsOiB0cnVlIH1cbiAgICAgICksXG4gICAgXSlcbiAgKSxcbiAgdHJhbnNpdGlvbihcbiAgICB0b1JpZ2h0LFxuICAgIGdyb3VwKFtcbiAgICAgIHF1ZXJ5KFxuICAgICAgICAnOmVudGVyJyxcbiAgICAgICAgW1xuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhbmltYXRlKCcwLjZzIGVhc2UtaW4tb3V0Jywgc3R5bGUoJyonKSksXG4gICAgICAgIF0sXG4gICAgICAgIHsgb3B0aW9uYWw6IHRydWUgfVxuICAgICAgKSxcbiAgICAgIHF1ZXJ5KFxuICAgICAgICAnOmxlYXZlJyxcbiAgICAgICAgW1xuICAgICAgICAgIGFuaW1hdGUoXG4gICAgICAgICAgICAnMC42cyBlYXNlLWluLW91dCcsXG4gICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgIHpJbmRleDogMCxcbiAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgXSxcbiAgICAgICAgeyBvcHRpb25hbDogdHJ1ZSB9XG4gICAgICApLFxuICAgIF0pXG4gICksXG5dKTtcbiJdfQ==