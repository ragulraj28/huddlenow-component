import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';
import ButtonGroup from './pages/button-group';
import Checkboxes from './pages/checkboxes';
import EmptyState from './pages/empty-state';
import FormFields from './pages/form-fields';
import Layout from './pages/layout';
import Toggles from './pages/toggles';
import CreateTemplates from './pages/create-templates';
import TemplateBlocks from './pages/template-block';
import TemplateBlockDetails from './pages/template-block-details';
import Filters from './pages/filters';
import DurationTimerPage from './pages/duration-timer';

function App() {

  return (

    <Router>

      <div className="app-container">

        <div className="main-content">

          <Sidebar />

          <Routes>

            <Route path="/layout" element={<Layout />} />

            <Route path="/empty-state" element={<EmptyState />} />
            
            <Route path="/form-fields" element={<FormFields />} />

            <Route path="/filters" element={<Filters />} />

            <Route path="/button-group" element={<ButtonGroup />} />

            <Route path="/checkboxes" element={<Checkboxes />} />

            <Route path="/duration-timer" element={<DurationTimerPage />} />

            <Route path="/toggles" element={<Toggles />} />
            
            <Route path="/create-templates" element={<CreateTemplates />} />

            <Route path="/template-block" element={<TemplateBlocks />} />

            <Route path="/template-block-details" element={<TemplateBlockDetails />} />

          </Routes>
          
        </div>

      </div>

    </Router>
    
  );

}

export default App;
