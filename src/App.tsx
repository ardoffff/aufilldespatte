/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { AnimalDetail } from './pages/AnimalDetail';
import { AnimalList } from './pages/AnimalList';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chiots" element={<AnimalList />} />
          <Route path="/chatons" element={<AnimalList />} />
          <Route path="/animaux" element={<AnimalList />} />
          <Route path="/temoignages" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/animal/:id" element={<AnimalDetail />} />
          {/* Add catch-all route to redirect to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}


