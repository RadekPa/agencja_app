import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrEventsCreateManyInputObjectSchema as tblAgrEventsCreateManyInputObjectSchema } from './objects/tblAgrEventsCreateManyInput.schema';

export const tblAgrEventsCreateManySchema: z.ZodType<Prisma.tblAgrEventsCreateManyArgs> = z.object({ data: z.union([ tblAgrEventsCreateManyInputObjectSchema, z.array(tblAgrEventsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblAgrEventsCreateManyArgs>;

export const tblAgrEventsCreateManyZodSchema = z.object({ data: z.union([ tblAgrEventsCreateManyInputObjectSchema, z.array(tblAgrEventsCreateManyInputObjectSchema) ]),  }).strict();