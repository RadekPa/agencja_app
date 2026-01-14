import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmissionsCreateManyInputObjectSchema as tblSubmissionsCreateManyInputObjectSchema } from './objects/tblSubmissionsCreateManyInput.schema';

export const tblSubmissionsCreateManySchema: z.ZodType<Prisma.tblSubmissionsCreateManyArgs> = z.object({ data: z.union([ tblSubmissionsCreateManyInputObjectSchema, z.array(tblSubmissionsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblSubmissionsCreateManyArgs>;

export const tblSubmissionsCreateManyZodSchema = z.object({ data: z.union([ tblSubmissionsCreateManyInputObjectSchema, z.array(tblSubmissionsCreateManyInputObjectSchema) ]),  }).strict();