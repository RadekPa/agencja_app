import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonCreateManyInputObjectSchema as tblPersonCreateManyInputObjectSchema } from './objects/tblPersonCreateManyInput.schema';

export const tblPersonCreateManySchema: z.ZodType<Prisma.tblPersonCreateManyArgs> = z.object({ data: z.union([ tblPersonCreateManyInputObjectSchema, z.array(tblPersonCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblPersonCreateManyArgs>;

export const tblPersonCreateManyZodSchema = z.object({ data: z.union([ tblPersonCreateManyInputObjectSchema, z.array(tblPersonCreateManyInputObjectSchema) ]),  }).strict();