import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import PropTypes from 'prop-types';
class CourseForm extends React.Component {
  constructor(props) {
    super(props);
    this.getAuthorName = this.getAuthorName.bind(this);
  }

  getAuthorName(authors,course){
    let tempAuthor = authors.find(a => a.id === course.authorId);
    return tempAuthor.name;
  }
  render(props) {
    const { course, errors,authors, onChange, onSave,saving} = { ...this.props };
    

    return (
      <form className="form-group" onSubmit={onSave}>
        <h2>{course.id ? "Edit" : "Add"} Course</h2>
        {errors.onSave && (
          <div className="alert alert-danger" role="alert">
            {errors.onSave}
          </div>
        )}
        <TextInput
              name="title"
              type="text"
              label="Title"
              value={course.title}
              onChange={onChange}
              error={errors.title}
            />
      
            <SelectInput
              name="authorId"
              label="Author"
              value={course.authorId || ""}
              defaultOption="Select Author"
              options={authors.map(author => ({
                value: author.id,
                text: author.name
              }))}
              onChange={onChange}
              error={errors.author}
            />
      
           <TextInput
              name="category"
              label="Category"
              type="text"
              value={course.category}
              onChange={onChange}
              error={errors.category}
            /> 
            


        

        <button type="submit" disabled={saving} className="btn btn-primary">
          {saving ? "Saving..." : "Save"}
        </button>
      </form>
    )
  }
}

CourseForm.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired
};

export default CourseForm;