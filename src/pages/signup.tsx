import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import { TextField } from '@/components/ui/text-field';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

const Signup = () => {
  const form = useForm({
    mode: 'all',
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Form {...form}>
        <div className="flex flex-col w-96 border border-gray-200 p-6 rounded-md">
          <div className="text-2xl font-bold mb-6">Signup a new account</div>
          <div className="gap-4 mb-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => <TextField label="username" {...field} />}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => <TextField label="email" {...field} />}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => <TextField label="password" {...field} />}
            />
          </div>
          <Button>Confirm</Button>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
