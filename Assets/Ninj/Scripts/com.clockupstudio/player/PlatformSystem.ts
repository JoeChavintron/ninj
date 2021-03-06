namespace com.clockupstudio.player {

    /**
     * PlatformHitSystem add component to entity to tell they're on ground
     *
     * TODO: this should consider move out from player namespace.
     */
    export class PlatformHitSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach(
                [game.PlayerTag, ut.HitBox2D.HitBoxOverlapResults, ut.Entity],
                (_, overlapResults, entity) => {
                    // overlapResults.overlaps.forEach((v) => {
                    //     if (this.world.hasComponent(v.otherEntity, game.PlatformTag)) {
                    //         if(this.world.hasComponent(entity, game.Falling)){
                    //             this.world.removeComponent(entity, game.Falling);
                    //         }

                    //         if(!this.world.hasComponent(entity, game.Grounded)){
                    //             this.world.addComponent(entity, game.Grounded);
                    //         }
                    //     }
                    // })
                }
            );
        }
    }
}
