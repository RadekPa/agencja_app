import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitEventsSelectObjectSchema as tblTitEventsSelectObjectSchema } from './objects/tblTitEventsSelect.schema';
import { tblTitEventsIncludeObjectSchema as tblTitEventsIncludeObjectSchema } from './objects/tblTitEventsInclude.schema';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './objects/tblTitEventsWhereUniqueInput.schema';

export const tblTitEventsDeleteOneSchema: z.ZodType<Prisma.tblTitEventsDeleteArgs> = z.object({ select: tblTitEventsSelectObjectSchema.optional(), include: tblTitEventsIncludeObjectSchema.optional(), where: tblTitEventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTitEventsDeleteArgs>;

export const tblTitEventsDeleteOneZodSchema = z.object({ select: tblTitEventsSelectObjectSchema.optional(), include: tblTitEventsIncludeObjectSchema.optional(), where: tblTitEventsWhereUniqueInputObjectSchema }).strict();