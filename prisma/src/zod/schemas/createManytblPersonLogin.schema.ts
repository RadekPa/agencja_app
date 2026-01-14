import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonLoginCreateManyInputObjectSchema as tblPersonLoginCreateManyInputObjectSchema } from './objects/tblPersonLoginCreateManyInput.schema';

export const tblPersonLoginCreateManySchema: z.ZodType<Prisma.tblPersonLoginCreateManyArgs> = z.object({ data: z.union([ tblPersonLoginCreateManyInputObjectSchema, z.array(tblPersonLoginCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblPersonLoginCreateManyArgs>;

export const tblPersonLoginCreateManyZodSchema = z.object({ data: z.union([ tblPersonLoginCreateManyInputObjectSchema, z.array(tblPersonLoginCreateManyInputObjectSchema) ]),  }).strict();