var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
        }
    ]
};


const octopus = {
    init:function () {
        model.currentCat = model.cats[0]
        catList.init()
        catView.init()
    },
    getCurrentCat:function () {
        return model.currentCat
    },
    updateClick:function () {
        model.currentCat.clickCount++
        catView.render()
    },
    getAllcats:function () {
        return model.cats
    },
    updateCurrent:function (cat) {
        model.currentCat = cat;
        catView.render()
    }
}


const catView = {
    init:function () {
       this.catName = document.getElementById('cat-name');
       this.catCount = document.getElementById('cat-count');
       this.catImg = document.getElementById('cat-img');
       this.catImg.addEventListener('click',function () {
            octopus.updateClick()
        })
        this.render()
    },
    render:function () {
        const cat = octopus.getCurrentCat()
        this.catName.textContent = cat.name
        this.catCount.textContent = cat.clickCount
        this.catImg.src = cat.imgSrc

    }
};


const catList ={
    init:function () {
        let cat ,element;
        const catList = document.getElementById('cat-list');
        const cats = octopus.getAllcats()
        for (let i=0;i<cats.length;i++){
            cat = cats[i];
            element = document.createElement('li');
            element.textContent = cat.name
            catList.appendChild(element)
            element.addEventListener('click',(function (copyCat) {
                return function () {
                    octopus.updateCurrent(copyCat)
                    catView.render()
                }
            })(cat))
        }
    }

}

octopus.init();