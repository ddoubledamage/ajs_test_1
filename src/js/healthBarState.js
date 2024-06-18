export function healthBarState(health) {
    return health >= 50 ? 'healthy' : health < 50 && health >= 15 ? 'wounded' : health < 15 && health > 0 ? 'critical' : 'dead';
}