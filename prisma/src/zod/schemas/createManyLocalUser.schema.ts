import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocalUserCreateManyInputObjectSchema as LocalUserCreateManyInputObjectSchema } from './objects/LocalUserCreateManyInput.schema';

export const LocalUserCreateManySchema: z.ZodType<Prisma.LocalUserCreateManyArgs> = z.object({ data: z.union([ LocalUserCreateManyInputObjectSchema, z.array(LocalUserCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.LocalUserCreateManyArgs>;

export const LocalUserCreateManyZodSchema = z.object({ data: z.union([ LocalUserCreateManyInputObjectSchema, z.array(LocalUserCreateManyInputObjectSchema) ]),  }).strict();