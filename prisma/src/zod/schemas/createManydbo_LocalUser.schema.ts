import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dbo_LocalUserCreateManyInputObjectSchema as dbo_LocalUserCreateManyInputObjectSchema } from './objects/dbo_LocalUserCreateManyInput.schema';

export const dbo_LocalUserCreateManySchema: z.ZodType<Prisma.dbo_LocalUserCreateManyArgs> = z.object({ data: z.union([ dbo_LocalUserCreateManyInputObjectSchema, z.array(dbo_LocalUserCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dbo_LocalUserCreateManyArgs>;

export const dbo_LocalUserCreateManyZodSchema = z.object({ data: z.union([ dbo_LocalUserCreateManyInputObjectSchema, z.array(dbo_LocalUserCreateManyInputObjectSchema) ]),  }).strict();