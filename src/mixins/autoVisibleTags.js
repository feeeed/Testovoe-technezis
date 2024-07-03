
export default{
    data: () => (
        {
            containerWidth: 0,
        }),
    computed:{
        visibleTags() {
            const visibleTags = []
            let currentTagWidth = 0
            //
            // Если какой-то элемент не вошел в область
            // отрисовки целиком, то все следующие за ним элементы тоже не должны
            // рисоваться),

            for (const tag of this.tags){
                const tagTextWidth = this.getTextWidth(tag.text,'16px Roboto');
                const tagIconWidth = 24;
                const totalTagWidth = (tag.icon) ? tagTextWidth + tagIconWidth : tagTextWidth;
                console.log(totalTagWidth)
                if (currentTagWidth + totalTagWidth <= this.containerWidth) {
                    visibleTags.push(tag);
                    currentTagWidth += totalTagWidth;

                }
                else break;

            }
            return visibleTags;
            //
            // Вывод всех тегов которые влезают в контейнер

            // this.tags.forEach((tag) => {
            //     const tagTextWidth = this.getTextWidth(tag.text,'16px Roboto');
            //     const tagIconWidth = 24;
            //     const totalTagWidth = (tag.icon) ? tagTextWidth + tagIconWidth : tagTextWidth;
            //
            //     console.log(totalTagWidth)
            //
            //     if (currentTagWidth + totalTagWidth <= this.containerWidth) {
            //         visibleTags.push(tag);
            //         currentTagWidth += totalTagWidth;
            //
            //     }
            // });
            //
            // return visibleTags;
        },
    },
    methods:{
        handleResize() {
            this.containerWidth = this.$el.clientWidth;
        },
        getTextWidth(text,font) {
            let canvas = document.createElement('canvas');
            let context = canvas.getContext('2d');
            context.font = font
            return context.measureText(text).width+24;
        },

    },
    mounted(){
        this.containerWidth = this.$el.clientWidth;
        window.addEventListener('resize', this.handleResize);

    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
}