import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmEventsCreateManyInputObjectSchema as tblSubmEventsCreateManyInputObjectSchema } from './objects/tblSubmEventsCreateManyInput.schema';

export const tblSubmEventsCreateManySchema: z.ZodType<Prisma.tblSubmEventsCreateManyArgs> = z.object({ data: z.union([ tblSubmEventsCreateManyInputObjectSchema, z.array(tblSubmEventsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblSubmEventsCreateManyArgs>;

export const tblSubmEventsCreateManyZodSchema = z.object({ data: z.union([ tblSubmEventsCreateManyInputObjectSchema, z.array(tblSubmEventsCreateManyInputObjectSchema) ]),  }).strict();