import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitEventsSelectObjectSchema as tblTitEventsSelectObjectSchema } from './objects/tblTitEventsSelect.schema';
import { tblTitEventsIncludeObjectSchema as tblTitEventsIncludeObjectSchema } from './objects/tblTitEventsInclude.schema';
import { tblTitEventsCreateInputObjectSchema as tblTitEventsCreateInputObjectSchema } from './objects/tblTitEventsCreateInput.schema';
import { tblTitEventsUncheckedCreateInputObjectSchema as tblTitEventsUncheckedCreateInputObjectSchema } from './objects/tblTitEventsUncheckedCreateInput.schema';

export const tblTitEventsCreateOneSchema: z.ZodType<Prisma.tblTitEventsCreateArgs> = z.object({ select: tblTitEventsSelectObjectSchema.optional(), include: tblTitEventsIncludeObjectSchema.optional(), data: z.union([tblTitEventsCreateInputObjectSchema, tblTitEventsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblTitEventsCreateArgs>;

export const tblTitEventsCreateOneZodSchema = z.object({ select: tblTitEventsSelectObjectSchema.optional(), include: tblTitEventsIncludeObjectSchema.optional(), data: z.union([tblTitEventsCreateInputObjectSchema, tblTitEventsUncheckedCreateInputObjectSchema]) }).strict();