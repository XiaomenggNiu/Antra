const Api = (() => {
    const baseUrl = 'http://localhost:4232';
    const courses = 'courseList';
    const postPath = 'posts';
  
    const getCourses = () =>
      fetch([baseUrl, courses].join('/')).then((response) => response.json());
  
    const deleteCourses = (id) =>
      fetch([baseUrl, postPath, id].join('/'), {
        method: 'DELETE',
      }); 
  
    // const addTodo = (todo) =>
    //   fetch([baseUrl, postPath].join('/'), {
    //     method: 'POST',
    //     body: JSON.stringify(todo),
    //     headers: {
    //       'Content-type': 'application/json',
    //       charset: 'UTF-8',
    //     },
    //   }).then((response) => response.json());
  
    return {
      getCourses,
      deleteCourses,
    //   addTodo,
    };
  })();

const View = (() => {
    const domstr = {
        availableContainer: '#available-courses__container',
        selectedContainer: '#selected-courses__container',
        creditCount: '#selected-credits__display',
        selectBtn: '#selected-credits__button'
      };
   
      const createTmp = (arr) => {
        let tmp = '';
        arr.forEach((course) => {
            let type;
            if (course.required){
                type = 'Compulsory';
            } else {
                type = 'Elective';
            }
            // Create template
            tmp += `
            <tr><td id='${course.courseId}' class='${course.credit}'>
                ${course.courseName}<br>
                Course Type: ${type}<br>
                Course Credit: ${course.credit}
            </td></tr>`;
        });
        return tmp;
      };

      const updateCredit = (credit, display) => {
        display.textContent = credit;
      };
    
      const render = (ele, tmp) => {
        ele.innerHTML = tmp;
      };
    
      return {
        domstr,
        createTmp,
        updateCredit,
        render,
      };
})();

const Model = ((api, view) => {
    const { getCourses, deleteCourses } = api;

    class State {
        #courseList = [];

        get courseList(){
            return this.#courseList;
        }
        set courseList(newcourseList) {
            this.#courseList = newcourseList;
            const courseContainer = document.querySelector(view.domstr.availableContainer);
            const tmp = view.createTmp(this.#courseList);
            view.render(courseContainer, tmp);
        }
    }

    class Credit {
        #credit = 0;

        get creidtCount(){
            return this.#credit;
        }

        set creidtCount(newCredit){
            this.#credit = newCredit;
            let creditCount = document.querySelector(view.domstr.creditCount);
            view.updateCredit(this.#credit, creditCount);
        }
    }

    class Select {
        #courseList = [];

        get courseList(){
            return this.#courseList;
        }
        set courseList(newcourseList) {
            this.#courseList = newcourseList;
            const courseContainer = document.querySelector(view.domstr.selectedContainer);
            const tmp = view.createTmp(this.#courseList);
            view.render(courseContainer, tmp);
        }
    }

    return {
        getCourses,
        deleteCourses,
        State,
        Credit,
        Select
      };
})(Api, View);

const Controller = ((model, view) => {
    const state = new model.State();
    const credit = new model.Credit();
    const selected = new model.Select();
    let allCourses;
    
    const init = () => {
        model.getCourses().then((courses) =>{
            state.courseList = courses;
            allCourses = courses;
        });
        credit.creidtCount = 0;
    };

    // When course is selected, change background color and count credit
    const selectCourse = () => {
        // Add eventlisteners
        const courses = document.querySelectorAll(view.domstr.availableContainer);
        courses.forEach((elem) =>{
            elem.addEventListener('click', (e) => {
                e.target.classList.toggle('selected');
                // console.log(e.target.classList);
                if (e.target.classList.contains('selected')) {
                    credit.creidtCount = parseInt(credit.creidtCount) + parseInt(e.target.classList[0]); 
                    if (credit.creidtCount > 18) {
                        alert("You can only choose up to 18 credits in one semester!");
                        e.target.classList.toggle('selected');
                        credit.creidtCount = parseInt(credit.creidtCount) - parseInt(e.target.classList[0]);
                    }
                } else {
                    credit.creidtCount = parseInt(credit.creidtCount) - parseInt(e.target.classList[0]);
                }
            })
        });
    }

    const addCourse = () => {
        // Add eventlisteners
        const btn = document.querySelector(view.domstr.selectBtn);
        btn.addEventListener('click', () => {
            const courses = document.getElementsByClassName('selected');
            let selectedId = [], selectedCr = [];
            if (courses.length == 0){
                alert("Please choose your courses first!");
            } else {
                for (let i = 0; i < courses.length; i++){
                    selectedId.push(courses[i].id);
                }    
                // console.log(allCourses);
                selectedId.forEach((id) =>{
                    const c = allCourses.splice(parseInt(id), 1);
                    selectedCr.push(c[0]);
                });
                let conf = window.confirm(`You have chose ${credit.creidtCount} credits for this semster. You 
                cannot change once you submit. Do you want to confirm?`);
                if (conf) {
                    state.courseList = allCourses;
                    selected.courseList = selectedCr;
                    btn.disabled = true;
                }
            }
        
        });
        
    }

    const bootstrap = () => {
        init();
        selectCourse();
        addCourse();
    };
    return {
        bootstrap
    }
})(Model, View);

Controller.bootstrap();