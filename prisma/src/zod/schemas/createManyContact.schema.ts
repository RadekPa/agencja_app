import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactCreateManyInputObjectSchema as ContactCreateManyInputObjectSchema } from './objects/ContactCreateManyInput.schema';

export const ContactCreateManySchema: z.ZodType<Prisma.ContactCreateManyArgs> = z.object({ data: z.union([ ContactCreateManyInputObjectSchema, z.array(ContactCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ContactCreateManyArgs>;

export const ContactCreateManyZodSchema = z.object({ data: z.union([ ContactCreateManyInputObjectSchema, z.array(ContactCreateManyInputObjectSchema) ]),  }).strict();