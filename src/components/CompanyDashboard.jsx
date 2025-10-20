import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Slider } from "./ui/slider";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";
import { Search, Filter, MapPin, Star, Download, SortAsc, SortDesc } from "lucide-react";

const mockCandidates = [
  {
    id: 1,
    name: "Ahmad Rizki",
    title: "Frontend Developer",
    location: "Jakarta",
    experience: "3-5 Tahun",
    experienceYears: 4,
    education: "Sarjana (S1)",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    expectedSalary: "Rp 10.000.000",
    expectedSalaryNum: 10000000,
    rating: 4.8,
    appliedDate: "2024-01-15",
    status: "Shortlisted",
    jobPosition: "Frontend Developer"
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    title: "UI/UX Designer",
    location: "Bandung",
    experience: "1-2 Tahun",
    experienceYears: 2,
    education: "Sarjana (S1)",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    expectedSalary: "Rp 7.000.000",
    expectedSalaryNum: 7000000,
    rating: 4.6,
    appliedDate: "2024-01-14",
    status: "Applied",
    jobPosition: "UI/UX Designer"
  },
  {
    id: 3,
    name: "Budi Santoso",
    title: "Backend Developer",
    location: "Surabaya",
    experience: "5+ Tahun",
    experienceYears: 6,
    education: "Magister (S2)",
    skills: ["Node.js", "PostgreSQL", "AWS", "Docker"],
    expectedSalary: "Rp 15.000.000",
    expectedSalaryNum: 15000000,
    rating: 4.9,
    appliedDate: "2024-01-13",
    status: "Interview",
    jobPosition: "Backend Developer"
  },
  {
    id: 4,
    name: "Diana Putri",
    title: "Product Manager",
    location: "Jakarta",
    experience: "3-5 Tahun",
    experienceYears: 4,
    education: "Sarjana (S1)",
    skills: ["Product Strategy", "Agile", "Analytics", "Leadership"],
    expectedSalary: "Rp 12.000.000",
    expectedSalaryNum: 12000000,
    rating: 4.7,
    appliedDate: "2024-01-12",
    status: "Applied",
    jobPosition: "Product Manager"
  },
  {
    id: 5,
    name: "Rizki Pratama",
    title: "DevOps Engineer",
    location: "Jakarta",
    experience: "3-5 Tahun",
    experienceYears: 3,
    education: "Sarjana (S1)",
    skills: ["Docker", "Kubernetes", "AWS", "Jenkins"],
    expectedSalary: "Rp 13.000.000",
    expectedSalaryNum: 13000000,
    rating: 4.5,
    appliedDate: "2024-01-11",
    status: "Applied",
    jobPosition: "DevOps Engineer"
  },
  {
    id: 6,
    name: "Maya Sari",
    title: "Data Scientist",
    location: "Bandung",
    experience: "1-2 Tahun",
    experienceYears: 1,
    education: "Magister (S2)",
    skills: ["Python", "Machine Learning", "SQL", "Tableau"],
    expectedSalary: "Rp 9.000.000",
    expectedSalaryNum: 9000000,
    rating: 4.4,
    appliedDate: "2024-01-10",
    status: "Shortlisted",
    jobPosition: "Data Scientist"
  }
];

const statusColors = {
  Applied: "bg-blue-100 text-blue-800",
  Shortlisted: "bg-yellow-100 text-yellow-800",
  Interview: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800"
};

export default function CompanyDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [educationFilter, setEducationFilter] = useState('');
  const [jobPositionFilter, setJobPositionFilter] = useState('');
  const [salaryRange, setSalaryRange] = useState([5000000, 20000000]);
  const [ratingRange, setRatingRange] = useState([3.0, 5.0]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');

  const allSkills = Array.from(new Set(mockCandidates.flatMap(candidate => candidate.skills)));
  const allJobPositions = Array.from(new Set(mockCandidates.map(candidate => candidate.jobPosition)));

  const filteredCandidates = mockCandidates
    .filter(candidate => {
      const matchesSearch =
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesLocation = !locationFilter || candidate.location.includes(locationFilter);
      const matchesExperience = !experienceFilter || candidate.experience === experienceFilter;
      const matchesStatus = !statusFilter || candidate.status === statusFilter;
      const matchesEducation = !educationFilter || candidate.education === educationFilter;
      const matchesJobPosition = !jobPositionFilter || candidate.jobPosition === jobPositionFilter;

      const matchesSalary =
        candidate.expectedSalaryNum >= salaryRange[0] &&
        candidate.expectedSalaryNum <= salaryRange[1];
      const matchesRating = candidate.rating >= ratingRange[0] && candidate.rating <= ratingRange[1];

      const matchesSkills =
        selectedSkills.length === 0 ||
        selectedSkills.some(skill => candidate.skills.includes(skill));

      return (
        matchesSearch &&
        matchesLocation &&
        matchesExperience &&
        matchesStatus &&
        matchesEducation &&
        matchesJobPosition &&
        matchesSalary &&
        matchesRating &&
        matchesSkills
      );
    })
    .sort((a, b) => {
      if (!sortBy) return 0;
      let comparison = 0;
      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'rating':
          comparison = a.rating - b.rating;
          break;
        case 'salary':
          comparison = a.expectedSalaryNum - b.expectedSalaryNum;
          break;
        case 'date':
          comparison = new Date(a.appliedDate) - new Date(b.appliedDate);
          break;
        case 'experience':
          comparison = a.experienceYears - b.experienceYears;
          break;
        default:
          return 0;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  const handleSkillToggle = skill => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const resetAllFilters = () => {
    setSearchTerm('');
    setLocationFilter('');
    setExperienceFilter('');
    setStatusFilter('');
    setEducationFilter('');
    setJobPositionFilter('');
    setSalaryRange([5000000, 20000000]);
    setRatingRange([3.0, 5.0]);
    setSelectedSkills([]);
    setSortBy('');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 -z-10 rounded-lg"></div>
        <h2 className="mb-2 pt-6 uppercase tracking-wide">Dashboard Perusahaan</h2>
        <p className="text-muted-foreground">Filter dan kelola kandidat yang melamar ke posisi Anda</p>
      </div>

      {/* Filter Card */}
      <Card className="mb-8 border-l-4 border-l-primary">
        <CardHeader className="bg-muted/30">
          <CardTitle className="flex items-center justify-between uppercase tracking-wide">
            <div className="flex items-center">
              <Filter className="h-5 w-5 mr-2 text-primary" />
              Filter Kandidat Lanjutan
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={resetAllFilters} className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                Reset Semua Filter
              </Button>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Download className="h-4 w-4 mr-2" /> Export Data
              </Button>
            </div>
          </CardTitle>
        </CardHeader>

        {/* Card Content */}
        <CardContent className="space-y-6">
          {/* Filter Input */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Label>Cari Kandidat</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Nama, posisi, skill..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label>Posisi</Label>
              <Select value={jobPositionFilter} onValueChange={setJobPositionFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Semua posisi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Semua posisi</SelectItem>
                  {allJobPositions.map(position => (
                    <SelectItem key={position} value={position}>
                      {position}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Lokasi</Label>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Semua lokasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Semua lokasi</SelectItem>
                  <SelectItem value="Jakarta">Jakarta</SelectItem>
                  <SelectItem value="Bandung">Bandung</SelectItem>
                  <SelectItem value="Surabaya">Surabaya</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Semua status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Semua status</SelectItem>
                  <SelectItem value="Applied">Applied</SelectItem>
                  <SelectItem value="Shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="Interview">Interview</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Candidate Cards */}
      <div className="grid gap-6">
        {filteredCandidates.map(candidate => (
          <Card key={candidate.id} className="hover:shadow-xl transition-all hover:border-primary/50 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg">{candidate.name}</h3>
                      <Badge className={statusColors[candidate.status]}>{candidate.status}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">{candidate.title}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" /> {candidate.location}
                      </div>
                      <span>•</span>
                      <span>{candidate.experience}</span>
                      <span>•</span>
                      <span>{candidate.education}</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" /> {candidate.rating}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex gap-2 mb-2">
                          {candidate.skills.slice(0, 4).map(skill => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {candidate.skills.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{candidate.skills.length - 4} lainnya
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">Ekspektasi gaji: {candidate.expectedSalary}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                          Lihat Profil
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          Jadwalkan Interview
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Melamar pada: {new Date(candidate.appliedDate).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCandidates.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <p className="text-muted-foreground">Tidak ada kandidat yang sesuai dengan filter.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
