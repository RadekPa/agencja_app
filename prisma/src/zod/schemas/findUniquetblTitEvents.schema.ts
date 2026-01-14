import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitEventsSelectObjectSchema as tblTitEventsSelectObjectSchema } from './objects/tblTitEventsSelect.schema';
import { tblTitEventsIncludeObjectSchema as tblTitEventsIncludeObjectSchema } from './objects/tblTitEventsInclude.schema';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './objects/tblTitEventsWhereUniqueInput.schema';

export const tblTitEventsFindUniqueSchema: z.ZodType<Prisma.tblTitEventsFindUniqueArgs> = z.object({ select: tblTitEventsSelectObjectSchema.optional(), include: tblTitEventsIncludeObjectSchema.optional(), where: tblTitEventsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblTitEventsFindUniqueArgs>;

export const tblTitEventsFindUniqueZodSchema = z.object({ select: tblTitEventsSelectObjectSchema.optional(), include: tblTitEventsIncludeObjectSchema.optional(), where: tblTitEventsWhereUniqueInputObjectSchema }).strict();