import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { lkpPayTypeCreateManyInputObjectSchema as lkpPayTypeCreateManyInputObjectSchema } from './objects/lkpPayTypeCreateManyInput.schema';

export const lkpPayTypeCreateManySchema: z.ZodType<Prisma.lkpPayTypeCreateManyArgs> = z.object({ data: z.union([ lkpPayTypeCreateManyInputObjectSchema, z.array(lkpPayTypeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.lkpPayTypeCreateManyArgs>;

export const lkpPayTypeCreateManyZodSchema = z.object({ data: z.union([ lkpPayTypeCreateManyInputObjectSchema, z.array(lkpPayTypeCreateManyInputObjectSchema) ]),  }).strict();