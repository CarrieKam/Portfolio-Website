import mongoose from 'mongoose';

const AchievementSchema = new mongoose.Schema({
  title:        String,
  description:  String,
  iconKey:      String
},{ _id: false });

const TimelineSchema = new mongoose.Schema({
  title:       String,
  company:     String,
  location:    String,
  date:        String,
  description: [String],
  tags:        [String]
},{ _id: false });

const ProjectSchema = new mongoose.Schema({
  title:       String,
  date:        String,
  description: [String],
  url:         String,
  githubURL:   String,
  imagePath:   String,
  tags:        [String],
  category:    String
},{ _id: false });

const SchoolSchema = new mongoose.Schema({
  name:    String,
  program: String,
  year:    [String]
},{ _id: false });

const LanguageSchema = new mongoose.Schema({
  profile: {
    name:        String,
    status:      String,
    place:       String,
    program:     String,
    description: String
  },
  about:   { achievements: [AchievementSchema] },
  work:    { timeline:     [TimelineSchema]    },
  projects:{ project:      [ProjectSchema]     },
  education:{ schools:     [SchoolSchema]      },
  social:  {
    linkedin: String,
    github:   String,
    email:    String
  },
  ending:  { text: String }
});

/*  one document per language  */
const PortfolioSchema = new mongoose.Schema({
  en: LanguageSchema,
  fr: LanguageSchema
});

export default mongoose.model('Portfolio', PortfolioSchema);