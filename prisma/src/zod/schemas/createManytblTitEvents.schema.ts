import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitEventsCreateManyInputObjectSchema as tblTitEventsCreateManyInputObjectSchema } from './objects/tblTitEventsCreateManyInput.schema';

export const tblTitEventsCreateManySchema: z.ZodType<Prisma.tblTitEventsCreateManyArgs> = z.object({ data: z.union([ tblTitEventsCreateManyInputObjectSchema, z.array(tblTitEventsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblTitEventsCreateManyArgs>;

export const tblTitEventsCreateManyZodSchema = z.object({ data: z.union([ tblTitEventsCreateManyInputObjectSchema, z.array(tblTitEventsCreateManyInputObjectSchema) ]),  }).strict();