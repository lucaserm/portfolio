import { Eye } from 'lucide-react';

type Props = {
	project: any;
	views: number;
};

export const NAMES = {
	'sinmos-finished':
		'Sistema Integrado de Monitoramento e Segurança Finalizado',
	'sinmos-remastered-next':
		'Sistema Integrado de Monitoramento e Segurança para WEB',
	'sinmos-remastered-react-native':
		'Sistema Integrado de Monitoramento e Segurança para MOBILE',
	'sinmos-remastered-api':
		'RestAPI do Sistema Integrado de Monitoramento e Segurança',
	lucaserm: 'Configuração do Github',
	'pomodoro-react-ts': 'Pomodoro para WEB',
	'hotel-php': 'Sistema de Hotel para WEB',
	'instahub-reactnative': 'Instahub para MOBILE',
	'biblioteca-springboot': 'Sistema de Biblioteca para WEB',
	'todo-app-express': 'Lista de Tarefas',
	'calculadora-js-basica': 'Calculadora JS',
	'landing-page-noframewok': 'Landing Page sem Framework',
	'exemplo-posts-react': 'Posts com React',
	sinmos: 'Protótipo do Sistema Integrado de Monitoramento e Segurança',
};

export const Article: React.FC<Props> = ({ project, views }) => {
	return (
		<a href={`${project.html_url}`}>
			<article className='p-4 md:p-8'>
				<div className='flex justify-between gap-2 items-center'>
					<span className='text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange'>
						{project.updated_at ? (
							<time dateTime={new Date(project.updated_at).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(
									new Date(project.updated_at)
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
					<span className='text-zinc-500 text-xs  flex items-center gap-1'>
						<Eye className='w-4 h-4' />{' '}
						{Intl.NumberFormat('en-US', { notation: 'compact' }).format(views)}
					</span>
				</div>
				<h2 className='z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display'>
					{(NAMES as any)[project.name]}
				</h2>
				<p className='z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200'>
					{project.description}
				</p>
			</article>
		</a>
	);
};
